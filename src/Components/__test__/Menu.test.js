import Menu from "../Menu/Menu";

import { render, cleanup, screen, fireEvent } from "@testing-library/react";




describe("Check the Menu component", () => {

    afterEach(() => {
        cleanup()
    })


    // test("Check the primary home btn is render or not", () => {
    //     render(<Menu />);
    //     const primaryBtn = screen.getByTestId("primary-btn");
    //     expect(primaryBtn.textContent).toBe("Home");
    // });

    test("Left and Right option in dropdown", () => {
        render(<Menu />);
        // console.log(view);
        const leftBtn = screen.getByTestId("left");
        const rightBtn = screen.getByTestId("right");
        expect(leftBtn.textContent).toBe("Left");
        expect(rightBtn.textContent).toBe("Right");
    })
    test("Left Right DropDown value test.", () => {
        render(<Menu />);
        // console.log(view);
        const leftBtn = screen.getByTestId("left");
        const rightBtn = screen.getByTestId("right");
        expect(leftBtn.value).toBe("L");
        expect(rightBtn.value).toBe("R");
    })



    test("Toggle the left and right", () => {
        render(<Menu />);
        // Render the component and select the Option base on name. and check its a true or not.
        expect(screen.getByTestId('toggle-input').length).toBe(2);
        expect(screen.getByTestId("left", { name: "Left" }).selected).toBe(true);
        expect(screen.getByTestId("left", { name: "Right" }).selected).toBe(true);
    });


    // Testing the Buttons.
    test("check the openPort Button", () => {
        render(<Menu />);
        const openPortEle = screen.getByTestId("openPortBtn");
        expect(openPortEle.textContent).toBe("Open Port");
    })
    test("check the scannerBtn Button", () => {
        render(<Menu />);
        const openPortEle = screen.getByTestId("scannerBtn");
        expect(openPortEle.textContent).toBe("Scanner On");
    })
    test("check the checkPowerBtn Button", () => {
        render(<Menu />);
        const openPortEle = screen.getByTestId("checkVersionBtn");
        expect(openPortEle.textContent).toBe("Check Version");
    })
    test("check the exitBtn Button", () => {
        render(<Menu />);
        const openPortEle = screen.getByTestId("exitBtn");
        expect(openPortEle.textContent).toBe("Exit");
    })



    test("bar Code input box Initial rendring.", () => {
        render(<Menu />);
        const barcoadScannerInput = screen.getByTestId("barcoadScannerInput");
        expect(barcoadScannerInput.value).toBe("");
    })

    test("Run Time BarCode value modify", () => {
        render(<Menu />);
        const barcoadScannerInput = screen.getByTestId("barcoadScannerInput");

        fireEvent.change(barcoadScannerInput, {
            target: {
                value: "93ifkakf93kd933jf93j"
            }
        });
        expect(barcoadScannerInput.value).toBe("93ifkakf93kd933jf93j")
    })

    test("Ic Card Value initially.", () => {
        render(<Menu />)
        const icCardInput = screen.getByTestId("icCardInput");
        expect(icCardInput.value).toBe("");
    });

    test("Ic Card Value change in run time.", () => {
        render(<Menu />)
        const icCardInput = screen.getByTestId("icCardInput");
        fireEvent.change(icCardInput, {
            target: {
                value: "8484899eiin22j393"
            }
        })

        expect(icCardInput.value).toBe("8484899eiin22j393");
    })






})
