import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}
interface ChartProps {
    coinId: string;
    isLight: boolean;
}
function Chart({ coinId, isLight }: ChartProps) {
    const { isLoading, data } = useQuery<IHistorical[]>(
        ["ohlcv", coinId],
        () => fetchCoinHistory(coinId),
        {
            refetchInterval: 10000,
        }
    );
    const result = data?.map((item) => ({
        x: `${new Date(item.time_open).getHours()}시 ${new Date(item.time_open).getMinutes()}분`,
        y: [item.open, item.high, item.low, item.close],
    }));

    console.log(result);

    return (
        <div>
            {isLoading ? (
                "Loading chart..."
            ) : data ? (
                <ApexChart
                    type="candlestick"
                    series={[
                        {
                            name: "Price",
                            data: result!,
                        },
                    ]}
                    options={{
                        theme: {
                            mode: isLight ? "light" : "dark",
                        },
                        chart: {
                            height: 300,
                            width: 500,
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",
                        },
                        grid: { show: false },

                        fill: {
                            type: "gradient",
                            gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
                        },
                        colors: ["#0fbcf9"],
                        tooltip: {
                            y: {
                                formatter: (value) => `$${value.toFixed(2)}`,
                            },
                        },
                    }}
                />
            ) : (
                "데이터가 없습니다."
            )}
        </div>
    );
}

export default Chart;
