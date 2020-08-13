import { useRouter } from 'next/router'
import { FC, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { CategoryListStateType } from '../../store/categories/types'
import { categoryToTree, fetchAllCategoriesAsync, filterCategory } from '../../store/categories/actions'
import { Alert, Modal, Spinner } from 'react-bootstrap'
import { CategoryFilter } from './CategoryFilter'
import { CategoryList } from './CategoryList'

type PropTypes = {
  show: boolean;
  onHide: () => void;
}

export const CategoriesWrapper: FC<PropTypes> = ({ show, onHide }: PropTypes) => {

  const dispatch = useDispatch();
  const { categories, loader, error, filterInput } = useSelector<RootState, CategoryListStateType>(state => state.categories);
  const modal = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchAllCategoriesAsync())
    }
  }, [dispatch]);

  // if a url changes, the modal is closed
  useEffect(() => {
    show && onHide();
  }, [router])

  const treeCategories = categoryToTree(categories.filter(({ visible }) => visible));

  const handlerChangeFilter = (value: string) => dispatch(filterCategory(value));

  return (
    <Modal
      ref={modal}
      size="lg"
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Choose category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loader ? <Spinner animation={'border'} /> : (
          error ? <Alert variant={'danger'}>{error}</Alert> : (
            <>
              <div className="mb-3">
                <CategoryFilter value={filterInput} onChange={handlerChangeFilter} />
              </div>
              <div className="categories-all-list">
                <CategoryList categories={treeCategories} />
              </div>
            </>
          )
        )}
      </Modal.Body>
    </Modal>
  )
}