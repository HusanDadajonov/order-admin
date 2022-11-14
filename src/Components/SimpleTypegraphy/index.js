import React from 'react'
import {
  Typography,
  styled
} from '@mui/material';

const TypographyWrapper = styled(Typography)(
  ( theme ) => `
  &.MuiTypography-order__title{
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.02em;
    color: #171A23;
    margin-bottom:24px
  }

  &.MuiTypography-tab__text{
      font-size: 18px;
      line-height: 22px;
      letter-spacing: -0.02em;
      color: #171A23;
      opacity: 0.6;
      text-transform: capitalize;
  }

  &.MuiTypography-table__title{
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #171A23;
      opacity: 0.6;
  }

  &.MuiTypography-order__items{
    display: inline-block;
    background:#fafafa;
    padding:5px;
    border-radius:5px;
    align-items: center;
    justify-content: center;
    border:1px solid #e2e2e2;
  }

  &.MuiTypography-table__id{
    color:#000;
    font-weight:500
  }

  &.MuiTypography-order__price--empty{
    width: fit-content;
    display: flex;
    background:#fafafa;
    padding:5px;
    border-radius:5px;
    align-items: center;
    justify-content: center;
    color:#7d7d7d;
    border:1px solid #e2e2e2;
  }

  &.MuiTypography-order__cancelled{
    width: fit-content;
    display:flex;
    background: rgba(238, 36, 90, 0.12);
    padding:5px;
    border-radius:5px;
    align-items: center;
    justify-content: center;
    color: #DD144A;
  }

  &.MuiTypography-order__new{
    width: fit-content;
    display:flex;
    background: rgba(80, 165, 71, 0.12);
    padding:5px;
    border-radius:5px;
    align-items: center;
    justify-content: center;
    color: #50A547;
  }

  &.MuiTypography-user__name{
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.02em;
    color: #171a23;
  }

  &.MuiTypography-user__id{
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    color: #171a23;
    opacity: 0.8;
    margin-left:12px;
  }

  &.MuiTypography-user__sub--title{
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.01em;
    color: #171A23;
    opacity: 0.6;
    margin-bottom:7px;
  }

  &.MuiTypography-user__title{
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.02em;
    color: #171A23;
  }

  &.MuiTypography-cost__title{
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: -0.02em;
    color: #171a23;
    margin-bottom:24px
  }

  &.MuiTypography-orders__count{
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #171A23;
    margin-bottom:20px;
  }

  &.MuiTypography-orders__check{
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #171A23;
    margin-right:8px;
  }

  &.MuiTypography-order__verify{
    width: fit-content;
    display:flex;
    background: rgba(80, 165, 71, 0.12);
    padding:5px;
    border-radius:5px;
    align-items: center;
    justify-content: center;
    color: #50A547;
  }

  &.MuiTypography-order__pending{
    width: fit-content;
    display:flex;
    background: rgba(241, 176, 48, 0.12);
    padding:5px;
    border-radius:5px;
    align-items: center;
    justify-content: center;
    color: #F1B030;
  } 

  
  &.MuiTypography-order__checking{
    width: fit-content;
    display:flex;
    background: rgba(241, 176, 48, 0.12);
    padding:5px;
    border-radius:5px;
    align-items: center;
    justify-content: center;
    color: #F1B030;
 
    
  &.MuiTypography-order__delivered{
    width: fit-content;
    display:flex;
    background: rgba(80, 165, 71, 0.12);
    padding:5px;
    border-radius:5px;
    align-items: center;
    justify-content: center;
    color: #50A547;
  }



`
);

const SimpleTypography = (props) => {
  return (
    // <Button className={`${classes.styles} MuiButton-text-${props.color} MuiButton-bg-${props.color}`}>{props?.name}</Button>
    <TypographyWrapper 
        className={`MuiTypography-${props?.className}`} 
        variant={props?.variant}    
        component={props?.variant}
      >
     {props?.text}
    </TypographyWrapper>
  )
}

export default SimpleTypography
