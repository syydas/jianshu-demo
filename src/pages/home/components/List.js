import React, { PureComponent } from 'react';
import { 
  ListItem,
  ListInfo,
  LoadMore
} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import imgUrl from '../../../statics/xiaozhan.jpg'

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {
          list.map((item, index) => (
            <ListItem key={index}>
              <img 
                className='list-pic'
                src={imgUrl} />
              <ListInfo>
              <h3 className='title'>{item.get('title')}</h3>
              <p className='desc'>{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          ))
        }
        <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
      </div>
    )
  }
}

const mapStage = (state) => ({
  list: state.get('home').get('articleList'),
  page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
})

export default connect(mapStage, mapDispatch)(List);