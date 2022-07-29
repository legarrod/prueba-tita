import React, { useEffect, useState, Fragment, useCallback } from 'react';
import { get } from 'api/httprequest';
import { IInformationPost } from './interfaces';
import { TextPost, HeaderSection, Button } from './ComponentsCard';
import ImageLike from '../../assets/images/like.svg';
import { useStoreModalComments } from 'store/useStoreModalComments';
import { useStoreModalUsers } from 'store/useStoreModalUsers';

const transformData = (data: any) => {
  const dataTransformed = data.map((post: any) => {
    return {
      idOwner: post?.owner?.id,
      codePost: post?.id,
      photoUser: post?.owner?.picture,
      userName: post?.owner?.firstName + '' + post?.owner?.lastName,
      photoPost: post?.image,
      textpost: post?.text,
      tagsPost: post?.tags,
      totalLikes: post?.likes,
    };
  });
  return dataTransformed;
};

const CardPost: React.FC = () => {
  const { setopenModal, setpostToFind } = useStoreModalComments();
  const [gettingData, setGettingData] = useState<boolean>(false);
  const { setopenModalUser, setuserId } = useStoreModalUsers();
  const [messgaNotData, setMessgaNotData] = useState<string>('');
  const [postList, setPostList] = useState<[] | ''>([]);
  const [newListTags, setnewListTags] = useState<[] | any>([]);
  const url: any = process.env.REACT_APP_API_URL_BASE;

  const cbResponse = useCallback((response: any) => {
    setGettingData(true);
    const data = response?.data?.data;
    if (response?.data) {
      setPostList(transformData(data));
    } else {
      console.error('Error....');
    }
  }, []);
  const cbResponseTags = useCallback((response: any) => {
    const data = response?.data?.data;
    if (data.length > 0) {
      setMessgaNotData('');
      setPostList(transformData(data));
    } else if (data.length === 0) {
      setMessgaNotData('No existen coincidencias con esta tag');
    } else {
      console.error('Error....');
    }
  }, []);

  const handlerShowDataUser = (iduser: string) => {
    setopenModalUser(true);
    setuserId(iduser);
  };
  const handlerShowComments = (id: string) => {
    setpostToFind(id);
    setopenModal(true);
  };
  const getPostByTag = (tag: string) => {
    get(`${url}tag/${tag.trim()}/post?limit=10`, cbResponseTags);
  };
  const cbResponseTagsList = useCallback((response: any) => {
    setGettingData(true);
    const tagsList = response?.data?.data;
    let newList = [];
    if (tagsList.length > 0) {
      for (let i = 3; i < tagsList.length && i < 53; i++) {
        const element = tagsList[i];
        newList.push(element);
      }
    }
    setnewListTags(newList);
  }, []);

  useEffect(() => {
    if (!gettingData) {
      get(`${url}post?limit=10`, cbResponse);
      get(`${url}tag?limit=10`, cbResponseTagsList);
    }
  }, [url, cbResponse, cbResponseTagsList, gettingData]);

  if (postList.length === 0) {
    return <div className="loader"></div>;
  }
  return (
    <Fragment>
      <div className="tags-list">
        {newListTags.length &&
          newListTags.map((tag: string, index: number) => (
            <button
              className="button-get-post-by-tag"
              key={index}
              onClick={() => getPostByTag(tag)}
            >{` ${tag}`}</button>
          ))}
      </div>
      <p className="text-message-no-data">{messgaNotData}</p>
      <div className="cards">
        {postList !== '' &&
          (postList as IInformationPost[]).map((item, index): any => (
            <div key={index} className="card">
              <HeaderSection onClick={() => handlerShowDataUser(item?.idOwner)}>
                <img
                  className="user-avatar"
                  src={item?.photoUser}
                  alt={item?.userName}
                />
                <h4>{item?.userName}</h4>
              </HeaderSection>
              <img
                src={item?.photoPost}
                className="card-image"
                alt={item?.textpost}
              />
              <TextPost>{item?.textpost}</TextPost>
              <div className="flex-wrap">
                {item?.tagsPost.map((tag, index): any => (
                  <button
                    className="button-get-post-by-tag"
                    key={index}
                    onClick={() => getPostByTag(tag)}
                  >{` ${tag}`}</button>
                ))}
              </div>
              <div className="footer-card">
                <div className="flex-wrap">
                  <img
                    src={ImageLike}
                    className="icon-likes"
                    alt={`Total Likes ${item?.totalLikes}`}
                  />
                  {item?.totalLikes}
                </div>
                <Button onClick={() => handlerShowComments(item?.codePost)}>
                  Comentarios
                </Button>
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default CardPost;
