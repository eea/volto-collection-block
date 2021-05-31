import React, { Component } from 'react';

import { Item, Grid } from 'semantic-ui-react';
import { Placeholder } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import config from '@plone/volto/registry';
import { isEqual } from 'lodash';
class TilesListing extends Component {
  state = { searchItems: [] };

  getPath(url) {
    return url
      .replace(config.settings.apiPath, '')
      .replace(config.settings.internalApiPath, '');
  }

  getSearchItems() {
    return this.props.items?.sort(
      (a, b) => new Date(b.ModificationDate) - new Date(a.ModificationDate),
    );
  }

  componentDidMount() {
    const searchItems = this.getSearchItems();
    this.setState({ searchItems });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!isEqual(this.props.items, prevProps.items)) {
      const searchItems = this.getSearchItems();
      this.setState({ searchItems });
    }
  }

  render() {
    const { searchItems } = this.state;

    return searchItems.length > 0 ? (
      <Grid columns={2}>
        {searchItems.map((item) => (
          <Grid.Column>
            <Item key={item['@id']}>
              <Item.Content>
                <Item.Header>
                  <Link style={{ color: '#666' }} to={item.url}>
                    <h2 className="item-title">{item.title || item.Title}</h2>
                  </Link>
                </Item.Header>

                <Item.Description>
                  <div className="descriptionBody">
                    <Link style={{ color: '#444' }} to={item.url}>
                      <p className="item-description">
                        {item.description || item.title || item.Title}
                      </p>
                    </Link>
                  </div>
                  <div className="searchMetadata">
                    {item.topics && (
                      <div>
                        <span className="searchLabel black">Topic:</span>{' '}
                        {item.topics?.join(', ')}meri zinndagi kaa
                      </div>
                    )}
                    {/* <div>
                  <span className="searchLabel black">Updated:</span>{' '}
                  <FormattedDate
                    value={item.ModificationDate}
                    day="2-digit"
                    month="long"
                    year="numeric"
                  />
                </div>
                <div>
                  <span className="searchLabel black">Location:</span>{' '}
                  {item['@components'] && item['@components']?.breadcrumbs && (
                    <Breadcrumb style={{ display: 'inline' }}>
                      {item['@components'].breadcrumbs.items
                        .slice(0, -1)
                        .map((item, index, items) => [
                          index < items.length - 1 ? (
                            <Breadcrumb.Section>
                              <Link
                                key={item.url}
                                to={this.getPath(item['@id'])}
                              >
                                {item.title}
                              </Link>
                              <Breadcrumb.Divider key={`divider-${item.url}`} />
                            </Breadcrumb.Section>
                          ) : (
                            <Breadcrumb.Section>
                              <Link
                                key={item.url}
                                to={this.getPath(item['@id'])}
                              >
                                {item.title}
                              </Link>
                            </Breadcrumb.Section>
                          ),
                        ])}
                    </Breadcrumb>
                  )}
                </div> */}
                  </div>
                </Item.Description>
              </Item.Content>
            </Item>
          </Grid.Column>
        ))}
      </Grid>
    ) : (
      <div>
        <p>No results.</p>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </div>
    );
  }
}

export default TilesListing;
