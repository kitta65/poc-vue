import { render } from "@testing-library/vue";
import Property from "@/components/Property.vue";

test("Property Component", () => {
  const { getByText } = render(Property, {
    props: {
      text: "testtest",
    },
  });

  getByText("text: testtest");
});
