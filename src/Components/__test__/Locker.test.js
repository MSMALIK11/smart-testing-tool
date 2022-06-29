import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import Locker from "../Locker";
import { useMutation } from "react-query";
import { locker } from "../Locker"




jest.mock("react-query", () => {
    return {
        useMutation: jest.fn()
    }
});

describe("Testing The Locker Component", () => {


    afterEach(() => {
        cleanup();
    })

    beforeEach(() => {
        useMutation.mockReturnValue({
            mutate: jest.fn()
        })

    })
    // This is test case. data.
    const props = {
        lockerno: 234,
        open: true,
        empty: false
    }
    const notopen = {
        lockerno: 234,
        open: false,
        empty: false
    }

    test("Testing the className which change the color data and color when locker is open", () => {
        render(<Locker props={{ ...props }} />)

        const lockerDiv = screen.getByTestId("locker");
        expect(lockerDiv.className).toBe("status lockopen")
    })


    test("When the locker open status is not true", () => {
        render(<Locker props={{ ...notopen }} />)
        const lockerDiv = screen.getByTestId("locker");
        expect(lockerDiv.className).toBe("status")
    })
    test("Check the locker no.", () => {
        render(<Locker props={{ ...notopen }} />)
        const lockerDiv = screen.getByTestId("locker");
        const { firstChild } = lockerDiv;
        expect(firstChild.textContent).toBe("234");
    })
    test("Open Close status when open status is true", () => {
        render(<Locker props={{ ...props }} />)
        const lockerDiv = screen.getByTestId("locker");
        const { lastElementChild } = lockerDiv
        expect(lastElementChild.textContent).toBe("open");
    })

    test("Open Close test when open status is flase", () => {
        render(<Locker props={{ ...notopen }} />)
        const lockerDiv = screen.getByTestId("locker");
        const { lastElementChild } = lockerDiv;
        expect(lastElementChild.textContent).toBe("close|Empty");
    })

    test("OnClick Locker component testing", () => {
        render(<Locker props={{ ...props }} />);
        const ele = screen.getByTestId("locker");
        const { firstChild } = ele
        fireEvent.click(firstChild);
        expect(parseInt(firstChild.textContent)).toEqual(locker)
    })



})