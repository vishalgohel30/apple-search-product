import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Header from "./Component";
import ItemList from "./Container/ItemList";
import ItemSidbar from "./Container/ItemSidbar";
import Container from "./Container";

const data = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "ad",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    ],
  },
];
describe("header Component", () => {
  test("renders header", () => {
    render(<Header />);
    expect(screen.getByText(/Apple/i)).toBeInTheDocument();
  });
});

describe("Container Component", () => {
  test("renders ItemSidbar pass null data", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ products: data }),
      })
    );
    await act(() => {
      render(<Container />);
    });

    const InputEl = screen.getByLabelText("brand");
    fireEvent.click(InputEl);
    fireEvent.change(InputEl, { target: { name: "brand", value: "" } });
    const btnSEl = screen.getByText("Search");
    expect(btnSEl).toBeInTheDocument();
    fireEvent.click(btnSEl);
    const btnREl = screen.getByText("Reset");
    expect(btnREl).toBeInTheDocument();
    fireEvent.click(btnREl);
  });
});

describe("ItemList & ItemSidbar Component", () => {
  test("renders ItemList", () => {
    render(<ItemList data={data} />);
    expect(screen.getByText(/iPhone 9/i)).toBeInTheDocument();
    expect(screen.getByText(/iPhone X/i)).toBeInTheDocument();
    expect(
      screen.getByText(/An apple mobile which is nothing like apple/i)
    ).toBeInTheDocument();
  });

  test("renders ItemSidbar", () => {
    const handleSearch = jest.fn();
    const handleReset = jest.fn();
    render(
      <ItemSidbar
        data={data}
        handleSearch={handleSearch}
        handleReset={handleReset}
      />
    );
    const InputEl = screen.getByPlaceholderText("title");
    expect(InputEl).toBeInTheDocument();
    fireEvent.change(InputEl, { target: { name: "title", value: "iPhone 9" } });
    const btnSEl = screen.getByText("Search");
    expect(btnSEl).toBeInTheDocument();
    fireEvent.click(btnSEl);
    expect(handleSearch).toHaveBeenCalled();
    const btnREl = screen.getByText("Reset");
    expect(btnREl).toBeInTheDocument();
    fireEvent.click(btnREl);
    expect(handleSearch).toHaveBeenCalled();
  });

  test("renders ItemSidbar pass null data", async () => {
    const handleSearch = jest.fn();
    const handleReset = jest.fn();
    render(
      <ItemSidbar
        data={null}
        handleSearch={handleSearch}
        handleReset={handleReset}
      />
    );
    const InputEl = screen.getByLabelText("category");
    fireEvent.click(InputEl);
    waitFor(async () => {
      expect(await screen.getByText("smartphones")).not.toBeInTheDocument();
    });
  });
});
