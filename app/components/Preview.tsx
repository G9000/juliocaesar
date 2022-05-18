import { useEffect } from "react";
import { usePreviewSubscription } from "../libs/sanity/usePreviewSubscription";

export const Preview = ({ data, setData, query, queryParams }) => {
  const { data: previewData } = usePreviewSubscription(query, {
    params: queryParams,
    initialData: data,
  });

  useEffect(() => setData(previewData), [previewData]);

  return <div>Preview Mode</div>;
};
