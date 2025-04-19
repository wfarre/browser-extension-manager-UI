import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Card from "../src/components/Card.vue";

describe("<Card>", () => {
  it("should render the card HTML correctly", () => {
    const wrapper = mount(Card, {
      props: {
        title: "DevLens",
        content:
          "Quickly inspect page layouts and visualize element boundaries.",
        image: "../src/assets/images/logo-devlens.svg",
      },
    });

    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<article class="border-cneutral-300 bg-component-bg font-main flex h-full flex-col justify-between gap-11 rounded-3xl border p-4.5">
        <header class="flex items-start gap-4"><img src="file:///Users/williamfarre/Developer/browser-extension-manager-UI/src/components/.../src/assets/images/logo-devlens.svg" height="60" width="60" alt="DevLens's logo">
          <div>
            <h2 class="text-text-title mb-3 text-xl font-bold">DevLens</h2>
            <p class="text-sm">Quickly inspect page layouts and visualize element boundaries.</p>
          </div>
        </header>
        <footer class="flex items-center justify-between"><button aria-label="delete-btn" class="border-cneutral-300 hover:bg-cred-400 outline-toggle-bg cursor-pointer rounded-full border px-4 py-3 duration-300 not-dark:hover:text-white"> Remove </button><label for="isactive-DevLens" class="group focus-within:border-toggle-bg relative inline-block h-5 w-9 rounded-full border-2 border-transparent"><span class="absolute top-0 left-0 scale-0 opacity-0">Active:</span><input class="h-0 w-0 opacity-0" type="checkbox" name="isactive-DevLens" id="isactive-DevLens" aria-label="toggle" aria-labelledby="Active"><span class="bg-cneutral-200 durantion-300 group-has-checked:bg-cred-700 absolute top-0 right-0 bottom-0 left-0 cursor-pointer rounded-full duration-300 before:absolute before:top-0.5 before:left-0.5 before:h-3 before:w-3 before:rounded-full before:bg-white before:duration-300 before:content-[''] group-has-checked:before:translate-x-4"></span></label></footer>
      </article>"
    `);
  });
  it("should remove the element from the array, when the user click on the delete button", async () => {
    const wrapper = mount(Card, {
      props: {
        title: "DevLens",
        content:
          "Quickly inspect page layouts and visualize element boundaries.",
        image: "../src/assets/images/logo-devlens.svg",
      },
    });

    await wrapper.get('[aria-label="delete-btn"]').trigger("click");
    expect(wrapper.emitted()).toHaveProperty("remove-item");
    expect(wrapper.emitted("remove-item")).toHaveLength(1);
  });

  it("should set the element isActive status to false when click", async () => {
    const wrapper = mount(Card, {
      props: {
        title: "DevLens",
        content:
          "Quickly inspect page layouts and visualize element boundaries.",
        image: "../src/assets/images/logo-devlens.svg",
        modelValue: true,
      },
    });

    await wrapper.get('[aria-label="toggle"]').setValue(false);
    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")[0]).toEqual([false]);
  });
});
