import { FC, ReactNode } from 'react'
import { Button, Spinner } from 'react-bootstrap'

type PropTypes = {
  currentPage: number;
  total: number;
  perPage: number;
  disabled: boolean;
  onChange: (page: number) => void;
  children: ReactNode;
  className?: string[]|null;
}

export const ShowMoreButton: FC<PropTypes> = (
  { currentPage, total, perPage, children, disabled, className, onChange }: PropTypes
) => {
  const lastPage: number = Math.ceil(total / perPage);
  const isLastPage: boolean = lastPage === currentPage;
  const styles: string[] = ['d-flex', 'align-items-center', 'mb-sm-4'];

  if (className) {
    styles.push(...className);
  }

  if (isLastPage) {
    return null;
  }

  return (
    <Button
      className={styles.join(' ')}
      disabled={disabled}
      onClick={() => onChange(currentPage + 1)}
      variant={'primary'}
      size={'lg'}
    >
      {children} {disabled ? <Spinner className="ml-3" animation="border" /> : null}
    </Button>
  )
}