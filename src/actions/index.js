import { GET_INDEX_VALUES } from "~/constants/ActionTypes";

import { GET_CONTENT } from "@plone/volto/constants/ActionTypes";
import { compact, concat, isArray, join, map, pickBy, toPairs } from "lodash";
import { dataToQueryString } from "~/helpers";

export function getIndexValues(name) {
  return {
    type: GET_INDEX_VALUES,
    request: {
      op: "post",
      path: "/@index-values",
      data: { name },
    },
  };
}

export function getContentWithData(
  url,
  version = null,
  subrequest = null,
  data = {}
) {
  const qs = dataToQueryString(data);
  return {
    type: GET_CONTENT,
    subrequest,
    request: {
      op: "get",
      path: `${url}${version ? `/@history/${version}` : ""}?fullobjects${
        data ? "&" + qs : ""
      }`,
      data,
    },
  };
}
