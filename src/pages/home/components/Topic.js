import React, { Component as PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
  TopicWrapper,
  TopicItem
} from '../style'
import imgUrl from '../../../statics/xiaozhan.jpg'

class Topic extends PureComponent {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.list.map((item) => (
            <TopicItem key={item.get('id')}>
              <img 
                className='topic-pic'
                src={imgUrl}
                alt=''
              />
              {item.get('title')}
           </TopicItem>
          ))
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.get('home').get('topicList')
})

export default connect(mapStateToProps, null)(Topic);