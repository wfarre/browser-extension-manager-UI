import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Header from "../src/components/Header.vue";
import { createApp } from "vue";
import { createPinia, setActivePinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";
import { useTheme } from "../src/store/theme";

const app = createApp({});
beforeEach(() => {
  const pinia = createPinia();
  app.use(pinia);
  setActivePinia(pinia);
});

describe("<Header>", () => {
  it("Should render the HTML correctly", () => {
    const wrapper = mount(Header);

    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<header class="bg-component-bg mx-4 flex items-center justify-between rounded-2xl p-3 md:p-4 lg:mx-32"><img src="/src/assets/images/logo.svg" class="h-10 w-auto" height="40" width="200" alt="extensions list logo"><button aria-label="toggle-btn" class="bg-btn-bg outline-toggle-bg cursor-pointer rounded-2xl p-4 hover:opacity-60"><img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='22'%20height='22'%20fill='none'%20viewBox='0%200%2022%2022'%3e%3cg%20clip-path='url(%23a)'%3e%3cpath%20stroke='%23091540'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.98'%20d='M20.125%2011.877A7.333%207.333%200%201%201%2010.124%201.875a9.168%209.168%200%201%200%2010.001%2010.002Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h22v22H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="dark mode"></button></header>"`,
    );
  });

  it("should turn to dark mode when click", async () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false,
          }),
        ],
      },
    });

    const store = useTheme();

    expect(store.isDarkTheme).toBe(false);
    await wrapper.get('[aria-label="toggle-btn"]').trigger("click");
    expect(store.toggleDarkTheme).toBeCalledTimes(1);
    expect(store.isDarkTheme).toBe(true);
  });
});
