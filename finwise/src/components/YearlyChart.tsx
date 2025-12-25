import React from "react";
import { ScrollView, ViewStyle } from "react-native";
import {
  Canvas,
  Rect,
  Text,
  Line,
  useFont,
} from "@shopify/react-native-skia";

export interface YearData {
  year: number;
  income: number;
  expense: number;
}

interface Props {
  data: YearData[];
  style?: ViewStyle;
}

const CHART_HEIGHT = 180;
const BAR_WIDTH = 16;
const GROUP_SPACING = 50;

export const YearlyChart: React.FC<Props> = ({ data, style }) => {

  const maxValue = Math.max(
    ...data.map((item) => Math.max(item.income, item.expense))
  );

  const chartWidth = data.length * (BAR_WIDTH * 2 + GROUP_SPACING);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    >
      <Canvas style={[{ width: chartWidth, height: 260 }, style]}>
        {/* Grid Lines */}
        {[0.25, 0.5, 0.75, 1].map((ratio, index) => (
          <Line
            key={index}
            p1={{ x: 0, y: CHART_HEIGHT * ratio }}
            p2={{ x: chartWidth, y: CHART_HEIGHT * ratio }}
            color="#bce8e4"
            style="stroke"
            strokeWidth={1}
          />
        ))}

        {/* Bars */}
        {data.map((item, i) => {
          const xBase = i * (BAR_WIDTH * 2 + GROUP_SPACING);

          const incomeHeight = (item.income / maxValue) * CHART_HEIGHT;
          const expenseHeight = (item.expense / maxValue) * CHART_HEIGHT;

          return (
            <>
              {/* Income bar (green) */}
              <Rect
                key={`income-${i}`}
                x={xBase}
                y={CHART_HEIGHT - incomeHeight}
                width={BAR_WIDTH}
                height={incomeHeight}
                color="#1cd4b0"
                r={8}
              />

              {/* Expense bar (blue) */}
              <Rect
                key={`expense-${i}`}
                x={xBase + BAR_WIDTH + 8}
                y={CHART_HEIGHT - expenseHeight}
                width={BAR_WIDTH}
                height={expenseHeight}
                color="#0284ff"
                r={8}
              />

                <Text
                  key={`label-${i}`}
                  x={xBase + 2}
                  y={CHART_HEIGHT + 20}
                  text={String(item.year)}
                  color="#35504d"
                />
            </>
          );
        })}
      </Canvas>
    </ScrollView>
  );
};
