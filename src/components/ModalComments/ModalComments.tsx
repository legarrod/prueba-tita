import React, { Fragment, useEffect, useState } from 'react';
import { HeaderSection } from '../CardPost/ComponentsCard';
import { useStoreModalComments } from 'store/useStoreModalComments';
import { get } from 'api/httprequest';
import { ICommentsPost } from './interfaces';

const transformData = (data: any) => {
  const dataTransformed = data.map((post: any) => {
    return {
      photoUser: post?.owner?.picture,
      userName: post?.owner?.firstName + '' + post?.owner?.lastName,
      message: post?.message,
      datePost: post?.datePost,
      total: post?.total,
    };
  });
  return dataTransformed;
};

const ModalComments = () => {
  const [totalComments, settotalComments] = useState<number>(0);
  const [gettingData, setgettingData] = useState<boolean>(false);
  const [commentsList, setcommentsList] = useState<[] | ''>([]);
  const url: any = process.env.REACT_APP_API_URL_BASE;
  const { openModal, setopenModal, postToFind } = useStoreModalComments();

  const handlerClosedmodal = () => {
    setopenModal(false);
    setcommentsList([]);
  };
  const cbResponse = (response: any) => {
    const data = response?.data?.data;
    if (response?.data?.total === 0) {
      setgettingData(false);
      settotalComments(0);
    } else {
      setcommentsList(transformData(data));
      setgettingData(false);
      settotalComments(response?.data?.total);
    }
  };

  useEffect(() => {
    if (postToFind) {
      setgettingData(true);
      get(`${url}post/${postToFind}/comment?limit=10`, cbResponse);
    }
  }, [url, setgettingData, postToFind]);

  return (
    <Fragment>
      {openModal && (
        <div id="modal">
          <button className="butto-close-modal" onClick={handlerClosedmodal}>
            X
          </button>
          <div className="justify-content">
            <section className="section-comment">
              {gettingData && <div className="loader"></div>}
              {!gettingData && totalComments === 0 && (
                <div>
                  <p className="emoji-nodata">😁</p>
                  <h3 className="emoji-nodata">
                    Este post no tiene comentarios
                  </h3>
                </div>
              )}
              {commentsList.length > 0 && (
                <h4>Total comentarios: {totalComments}</h4>
              )}

              {(commentsList as ICommentsPost[]).map((comment, index) => (
                <HeaderSection key={index}>
                  <img
                    className="user-avatar"
                    src={comment?.photoUser}
                    alt={`Usuario ${comment?.userName}`}
                  />
                  <div>
                    <h4 className="text-modal-comments">{comment?.userName}</h4>
                    <p className="text-modal-comments">{comment?.message}</p>
                  </div>
                </HeaderSection>
              ))}
            </section>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default ModalComments;
