export const PAGE_PADDING = "20px";
export const CARD_GAP = "20px";
export const CARD_TITLE = "text-lg font-bold  self-start mb-5";
export const BORDER_RADIUS = "rounded-2xl";
export const SIDEBAR_WIDTH_OPEN = "256px";
export const SIDEBAR_WIDTH_COLLAPSED = "80px";
// for components where one can't use Tailwind classes
export const COLORS = {
    PRIMARY: "#008ed3",
    PRIMARY_LIGHT: "#c1dae7",
    PRIMARY_BLACK: "#020a15",
    PRIMARY_BLACK_LIGHT: "#4b5563",
    PRIMARY_GRAY: "#f7f7f7",
    PRIMARY_YELLOW: "#fef9c3",
    PRIMARY_RED: "#ef4444",
    PRIMARY_GREEN: "#16a34a",
    PRIMARY_GREEN_LIGHT: "#dcfce7",
    SECONDARY_BLUE: "#1e40af",
    GRADIENT_MAIN: "linear-gradient(to right, #2563eb, #731ac4)",
}

export const REFETCH_CONFIGURATION = {
  refetchInterval: 1000 * 60 * 1, // Set to 1minutes seconds (5000ms)
  refetchOnMount: true,
  refetchOnWindowFocus: true,
  staleTime: 0, // Consider data immediately stale to encourage refreshes
};
export const ROWS_PER_PAGE = 10;
