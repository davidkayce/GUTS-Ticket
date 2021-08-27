import { mount } from "@vue/test-utils";
import { mockGroup, mockLayout, mockLayoutMatrix, mockAllocatedSeats } from "./data";
import App from "./App.vue";


describe("Theater application", () => {
  it("should render the app properly", () => {
    const wrapper = mount(App, { props: null });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("h3").text()).toEqual("Properties");
  });

  test("should render content correctly", () => {
    const wrapper = mount(App);
    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  test("draw seats function should generate proper matrix of layout", () => {
    const wrapper = mount(App);
    expect(wrapper.vm.drawSeats(mockLayout)).toEqual(mockLayoutMatrix);
  });

  test("allocate seats function should allocate seats according to groups", () => {
    const wrapper = mount(App);
    expect(wrapper.vm.allocateSeats(mockGroup, mockLayoutMatrix)).toEqual(mockAllocatedSeats);
  });

  test("the seats should be drawn properly", () => {
    const wrapper = mount(App);
    let totalRows = 0;
    
    Object.keys(mockLayoutMatrix).map((curr: string) => {
      //@ts-ignore
      mockLayoutMatrix[curr].forEach((layout: any) => {
        totalRows += layout?.length || 0;
      });
    });
    setTimeout(() => {
      const seats = wrapper.findAll(".seat-rows");
      expect(seats.length).toEqual(totalRows);
    }, 1000);
  });

  test("viewing the allocated seats data should set the right classes", () => {
    const wrapper = mount(App);
    setTimeout(() => {
      expect(wrapper.classes('seats group1 rank1')).toEqual(true);
      const blackSeat = wrapper.findAll(".seats.group1.rank1")[0];
      expect(blackSeat.attributes('stroke')).toBe('black');
      expect(blackSeat.attributes('fill')).toBe('rgb(184, 184, 184)');
    }, 1000);
  });
});
