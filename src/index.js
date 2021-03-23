import CollectionBlockView from "~/components/manage/Blocks/Collection/BlockView";
import CollectionBlockEdit from "~/components/manage/Blocks/Collection/BlockEdit";
import CollectionView from "~/components/manage/Blocks/Collection/View";
import chartIcon from "@plone/volto/icons/world.svg";

const applyConfig = (config) => {
  config.blocks.blocksConfig.collection_block = {
    id: "collection_block",
    title: "Collection Listing",
    view: CollectionBlockView,
    edit: CollectionBlockEdit,
    icon: chartIcon,
    group: "custom_addons",
  };

  config.views.contentTypesViews.Collection = CollectionView;
  return config;
};

export default applyConfig;
