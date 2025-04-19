import { useTheme } from "../src/store/theme";
import { createPinia, getActivePinia, setActivePinia } from "pinia";
import { beforeEach } from "vitest";
import { createApp } from "vue";
import { describe, expect, it } from "vitest";

const app = createApp({});
beforeEach(() => {
  const pinia = createPinia();
  app.use(pinia);
  setActivePinia(pinia);
});

describe("Store", () => {
  it("should turn darkmode to true", () => {
    const store = useTheme();
    expect(store.isDarkTheme).toBe(false);
    store.toggleDarkTheme();
    expect(store.isDarkTheme).toBe(true);
  });
});
