import instaLikesImg from '../assets/likes.png';
import followersImg from '../assets/followers.png';
import commentsImg from '../assets/comments.png';
import viewsImg from '../assets/views.png';

import fbLikesImg from '../assets/fbLike.png';
import fbCommentsImg from '../assets/fbComment.png';
import fbPageLikesImg from '../assets/fbPage.png';

import tiktokCommentsImg from '../assets/tiktokComments.png'
import tiktokLikesImg from '../assets/tiktokLikes.png'
import tiktokSharesImg from '../assets/tiktokShares.png'
import tiktokViewsImg from '../assets/tiktokViews.png'

import youtubeCommentsImg from '../assets/youtubeComments.png'
import youtubeLikesImg from '../assets/youtubeLikes.png'
import youtubeSubscribersImg from '../assets/youtubeSubscribers.png'
import youtubeViewsImg from '../assets/youtubeViews.png'

import twitterLikesImg from '../assets/twitterLikes.png';
import twitterFollowersImg from '../assets/twitterFollowers.png';

export const getVoucherImg = (voucherCode) => {
    switch(voucherCode){
      case 'instaLikes':
        return instaLikesImg
      case 'instaFollowers':
        return followersImg
      case 'instaComments':
        return commentsImg
      case 'instaViews':
        return viewsImg
      case 'fbLikes':
        return fbLikesImg
      case 'fbComments':
        return fbCommentsImg
      case 'fbPageLikes':
        return fbPageLikesImg
      case 'youtubeLikes':
        return youtubeLikesImg
      case 'youtubeComments':
        return youtubeCommentsImg
      case 'youtubeViews':
        return youtubeViewsImg
      case 'youtubeSubscribers':
        return youtubeSubscribersImg
      case 'tiktokComments':
        return tiktokCommentsImg
      case 'tiktokLikes':
        return tiktokLikesImg
      case 'tiktokShares':
        return tiktokSharesImg
      case 'tiktokViews':
        return tiktokViewsImg
      case 'twitterLikes':
        return twitterLikesImg
      case 'twitterFollowers':
        return twitterFollowersImg
    }
  }