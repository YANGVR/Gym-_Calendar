"use client";

import type { ChartData } from "./chart-data";

const WIDTH = 340;
const HEIGHT = 220;
const PLOT = { left: 40, right: 8, top: 10, bottom: 28 };
const SET_COLORS = ["var(--set-1)", "var(--set-2)", "var(--set-3)", "var(--set-4)", "var(--set-5)"];

export function setColor(setNumber: number): string {
  return SET_COLORS[(setNumber - 1) % SET_COLORS.length];
}

type ProgressChartProps = {
  data: ChartData;
  selectedIndex: number;
  onSelect: (index: number) => void;
  formatDate: (iso: string) => string;
};

/** 최근 운동일별 세트 번호 선 차트. 날짜를 누르면 그날이 선택된다. */
export function ProgressChart({ data, selectedIndex, onSelect, formatDate }: ProgressChartProps) {
  const plotWidth = WIDTH - PLOT.left - PLOT.right;
  const plotHeight = HEIGHT - PLOT.top - PLOT.bottom;
  const columnWidth = plotWidth / Math.max(data.dates.length, 1);
  const x = (index: number) => PLOT.left + columnWidth * (index + 0.5);
  const y = (value: number) => PLOT.top + plotHeight - ((value - data.yMin) / (data.yMax - data.yMin)) * plotHeight;

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      role="img"
      aria-label="최근 운동일별 세트 운동량 선 차트"
      className="block h-auto w-full lg:max-h-[340px]"
    >
      {data.ticks.map((tick) => (
        <g key={tick}>
          <line x1={PLOT.left} x2={WIDTH - PLOT.right} y1={y(tick)} y2={y(tick)} className="stroke-border" />
          <text
            x={PLOT.left - 6}
            y={y(tick) + 4}
            textAnchor="end"
            fontSize="10"
            className="fill-muted-foreground"
          >
            {Math.round(tick)}
          </text>
        </g>
      ))}
      <line
        x1={x(selectedIndex)}
        x2={x(selectedIndex)}
        y1={PLOT.top}
        y2={PLOT.top + plotHeight}
        strokeWidth="1.5"
        className="stroke-border"
      />
      {data.lines.map((line) => {
        const segments: { index: number; value: number }[][] = [[]];
        line.points.forEach((value, index) => {
          if (value === null) segments.push([]);
          else segments[segments.length - 1].push({ index, value });
        });
        return (
          <g key={line.setNumber} data-set={line.setNumber}>
            {segments
              .filter((segment) => segment.length > 1)
              .map((segment) => (
                <polyline
                  key={segment[0].index}
                  points={segment.map((p) => `${x(p.index)},${y(p.value)}`).join(" ")}
                  fill="none"
                  stroke={setColor(line.setNumber)}
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              ))}
            {line.points.map((value, index) =>
              value === null ? null : (
                <circle
                  key={index}
                  cx={x(index)}
                  cy={y(value)}
                  r={index === selectedIndex ? 5 : 3}
                  fill={setColor(line.setNumber)}
                  strokeWidth="1.5"
                  className="stroke-card"
                />
              )
            )}
          </g>
        );
      })}
      {data.dates.map((date, index) => (
        <g
          key={date}
          role="button"
          tabIndex={0}
          aria-label={`${formatDate(date)} 선택`}
          aria-pressed={index === selectedIndex}
          className="cursor-pointer outline-none focus-visible:[&>rect]:stroke-ring"
          onClick={() => onSelect(index)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onSelect(index);
            }
          }}
        >
          <rect
            x={x(index) - columnWidth / 2}
            y={PLOT.top}
            width={columnWidth}
            height={plotHeight + PLOT.bottom}
            fill="transparent"
            strokeWidth="2"
            stroke="transparent"
          />
          <text
            x={x(index)}
            y={HEIGHT - 10}
            textAnchor="middle"
            fontSize="11"
            fontWeight={index === selectedIndex ? 700 : 500}
            className={index === selectedIndex ? "fill-foreground" : "fill-muted-foreground"}
          >
            {date.slice(5).replace("-", "/")}
          </text>
        </g>
      ))}
    </svg>
  );
}
