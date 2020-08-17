import { FC } from 'react'
import { Row, Col } from 'react-bootstrap'
import { ShowMoreButton } from "./ShowMoreButton";
import { Pagination } from "./Pagination";

type PropTypes = {
  currentPage: number;
  total: number;
  perPage: number;
  disabled: boolean;
  onNextPage: (page: number) => void;
  onShowMore: (page: number) => void
  buttonText?: string;
}

export const PaginationButtons: FC<PropTypes> = (
  { currentPage, total, perPage, disabled, buttonText = 'Show more', onNextPage, onShowMore }: PropTypes
) => {
   return (
     <Row className="justify-content-md-between justify-content-sm-center align-items-center">
       <Col md={'auto'} sm={12} className="justify-content-sm-center d-sm-flex">
         <ShowMoreButton
           currentPage={currentPage}
           total={total}
           perPage={perPage}
           disabled={disabled}
           onChange={onShowMore}
         >{buttonText}</ShowMoreButton>
       </Col>
       <Col md={'auto'} sm={12}>
         <Pagination
           currentPage={currentPage}
           perPage={perPage}
           total={total}
           disabled={disabled}
           onChange={onNextPage}
         />
       </Col>
     </Row>
   )
}