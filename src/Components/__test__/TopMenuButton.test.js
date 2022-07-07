import TopHomeMenu from '../TopHomeMenu/TopMenu'
import { render, cleanup, screen} from "@testing-library/react";

describe("check the top home menu component",()=>{
    

    afterEach(()=>{
        cleanup()
    })


test("check the primary button render or not ",()=>{
render(<TopHomeMenu />);
const primaryBtn=screen.getByTestId('primary-btn');
expect(primaryBtn.textContent).toBe('Home')

})



})