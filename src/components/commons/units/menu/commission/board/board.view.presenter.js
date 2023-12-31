import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import * as C from './board.view.styles'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CommissionBoardViewUI(props) {

  return (
    <>  
      <C.Wrapper>
       <C.BoardWrapper>
       <C.BoardBanner>
          <C.BoardTitle>작품 의뢰</C.BoardTitle>
          <C.BoardSubTitle>
              <C.Link href={'/menu/service.center'}>
                <FontAwesomeIcon icon={faArrowLeft}/><C.Span>뒤로가기</C.Span>
              </C.Link> 
          </C.BoardSubTitle>
       </C.BoardBanner>
       <C.BoardFormWrapper>

        <C.BoardForm>
          <C.BoardFormTitle>게시글 확인하기</C.BoardFormTitle>
          <C.Line/>

          <C.InputWrapper>
            <C.Table>
              <thead>
              <C.Tr>
                <C.Th>문의 제목</C.Th><C.Td colSpan={3}>{props.commissionView?.commTitle}</C.Td><C.Th>작성 날짜</C.Th><C.Td>{new Date(props.commissionView?.commDate).toLocaleString()}</C.Td>
              </C.Tr>
              </thead>
              <tbody>
              <C.TrContent>
                <C.Td colSpan={6}>{props.commissionView?.commContent}</C.Td>
              </C.TrContent>
              </tbody>
            </C.Table>
          </C.InputWrapper>
          <C.BtnWrapper>
            <C.ListBtn onClick={props.onClickList}>목록보기</C.ListBtn>
            {/* <C.EditBtn onClick={onClickEdit}>수정하기</C.EditBtn> */}
          </C.BtnWrapper>
        </C.BoardForm>
       </C.BoardFormWrapper>       
       </C.BoardWrapper>
      </C.Wrapper>
    </>
  )
}