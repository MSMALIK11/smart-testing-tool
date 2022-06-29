
import { render, cleanup, screen } from "@testing-library/react";
import Home from "../Home";
import { useQuery } from "react-query";
import { totalLocker } from "../Home";

const data = {
    lockerStatus: [
        "L1",
        "L2",
        "L4",
        "L6",
        "L8",
        "L10",
        "L11",
        "L12",
        "L13",
        "L14",
        "L15",
        "L16",
        "L17",
        "L18",
        "L19",
        "L21",
        "L22",
        "L23"
    ],
    openLocker: [
        "L3",
        "L5",
        "L7",
        "L9",
        "L20"
    ]
}

let totalData = [];

totalData.push(...data.lockerStatus, ...data.openLocker);


jest.mock("react-query", () => {
    return {
        useQuery: jest.fn(),
        useMutation: jest.fn()
    }
});

describe("Testing the home component", () => {

    afterEach(() => {
        cleanup();
    });


    const HomeComponent = () => render(
        <Home />
    )

    test("testing the home component isLoading State", () => {
        useQuery.mockReturnValue({
            isLoading: true,
            isError: false,
            isSuccess: false,
            data: null
        })
        HomeComponent();
        const ele = screen.getByTestId("loading")
        expect(ele.textContent).toBe("Wait someTime");
    })

    test("testing the home component isError State", () => {
        useQuery.mockReturnValue({
            isLoading: false,
            isError: true,
            isSuccess: false,
            data: null
        })
        HomeComponent();
        const ele = screen.getByTestId("error")
        expect(ele.textContent).toBe("SomeThing Went Wrong");
    });

    test("testing the home component status is success and return a data", () => {
        useQuery.mockReturnValue({
            isLoading: false,
            isError: false,
            isSuccess: true,
            data: { ...data }
        })
        HomeComponent();
        expect(totalLocker.length).toBe(totalData.length);
    })



})