import { render, screen, waitFor } from "@testing-library/react";
import { ProductList } from "./ProductList"
import { getProducts } from "./api/getProducts";
import { getProductsMock } from "./api/mock/getProductsMock";
import '@testing-library/jest-dom';

jest.mock('./api/getProducts');

describe("Product list", () => {
    it("should render product list", async () => {

        (getProducts as jest.Mock).mockResolvedValue(getProductsMock);

        render(<ProductList />);

        await waitFor(() => {
            getProductsMock.forEach(product => {
                expect(screen.getByTestId(product.id)).toBeInTheDocument();
            })
        })
    })
})