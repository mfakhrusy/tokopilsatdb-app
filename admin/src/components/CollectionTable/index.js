import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import "react-table/react-table.css";

import './index.scss';

class CollectionTable extends Component {

  render() {
    const { collectionList } = this.props;

    const tableData = collectionList.map((item, id) => (
      {
        ...item,
        id: id + 1,
        img: (<img style={{ width: '30px' }} src={item.image_url} alt={item.file_name} />)
      })
    );

    return (
      <div className="collection-table">
        <ReactTable
          data={tableData}
          columns={[
            {
              Header: 'No',
              accessor: 'id',
              maxWidth: 100,
            },
            {
              Header: 'Label',
              accessor: 'label',
            },
            {
              Header: 'Items',
              accessor: 'items_count',
            },
            {
              Header: 'Thumbnail',
              accessor: 'img',
            }
          ]}
          getTdProps={(state, rowInfo, column, instance) => ({
            onClick: (e, handleOriginal) => {
              console.log(rowInfo);
            }
          })}
          defaultPageSize={15}
        />
      </div>
    );
  }
}

CollectionTable.propTypes = {
  collectionList: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    collectionList: state.collection.collectionList,
  };
};

export default connect(mapStateToProps)(CollectionTable);
