import appsSVG from '@plone/volto/icons/apps.svg';
import contentListingSVG from '@plone/volto/icons/content-listing.svg';
import tableSVG from '@plone/volto/icons/table.svg';
import { Button, Form, Grid } from 'semantic-ui-react';
import { Icon } from '@plone/volto/components';

import React, { Component } from 'react';

class SelectListingType extends Component {
  render() {
    return (
      <Form.Field inline required={true}>
        <Grid>
          <Grid.Row>
            <Grid.Column width="4">
              <div className="wrapper">
                <label htmlFor="field-align">Listing view</label>
              </div>
            </Grid.Column>
            <Grid.Column width="8" className="align-tools">
              <Button.Group>
                <Button icon basic title="Inline content listing">
                  <Icon name={contentListingSVG} size="24px" />
                </Button>
              </Button.Group>
              <Button.Group>
                <Button icon basic title="Tiles Listing">
                  <Icon name={appsSVG} size="24px" />
                </Button>
              </Button.Group>
              <Button.Group>
                <Button icon basic title="Table listing">
                  <Icon name={tableSVG} size="24px" />
                </Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form.Field>
    );
  }
}
export default SelectListingType;
