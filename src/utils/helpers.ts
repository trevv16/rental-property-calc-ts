import Humanize from "humanize-plus";

export function formatNumberAsCurrency(number: number, decimals: number = 2) {
  return Humanize.formatNumber(number, decimals);
}
