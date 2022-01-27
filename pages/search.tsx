import { useQueryState } from "next-usequerystate";
import React, { ReactElement } from "react";
import { useDebounce } from "react-use";

import { Layout, ProductCollection } from "@/components";
import { ProductFilterInput } from "@/saleor/api";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useQueryState("q");
  const [debouncedFilter, setDebouncedFilter] =
    React.useState<ProductFilterInput>({ search: searchQuery });

  const [] = useDebounce(
    () => {
      setDebouncedFilter({ search: searchQuery });
    },
    1000,
    [searchQuery]
  );

  return (
    <main className="max-w-5xl mx-auto w-full px-8 mt-5" data-theme="garden">
      <div className="form-control mb-10">
        <label className="label">
          <h2>Store Search</h2>
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery || ""}
            className="w-9/12 input input-primary input-bordered text-accent-content"
            onChange={(e) => setSearchQuery(e.target.value)} />
            <button className="btn btn-primary">Go</button>
        </div>
      </div>
      <ProductCollection filter={debouncedFilter} />
    </main>
  );
};

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SearchPage;
