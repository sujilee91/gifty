import { uuid } from 'uuidv4'
import { fire } from '../fire'

const fakeWishlistItem = {
  id: uuid(),
  name: 'R.A.T.S. Rapid Application Tourniquet System - Red by Extended Gun',
  price: 40,
  link:
    'https://www.amazon.ca/gp/product/B01KINMKGU/ref=ox_sc_saved_title_3?smid=A3V9K8LW3XHFJG&psc=1',
  description: 'For Bugging out',
  created_by: 'need to do this later',
  purchased_by: null,
}

export const wishlistListner = (accountKey, callback) => {
  fire
    .database()
    .ref(`${accountKey}/wishlist`)
    .on('value', (snap) => {
      const portfoliosObject = {}
      snap.forEach((portfolio) => {
        const portfolioObject = portfolio.val()
        portfoliosObject[portfolio.key] = portfolioObject
      })
      callback(portfoliosObject)
    })
}

export const addItemToWishlist = (
  accountKey,
  wishlistItem = fakeWishlistItem,
) => {
  fire
    .database()
    .ref(`${accountKey}/wishlist`)
    .push(wishlistItem)
    .catch((error) => {
      console.log('ADD COIN ERROR!@!!', error)
    })
}

export const editWishlistItem = ({
  accountKey,
  wishlistKey,
  updatedObject,
}) => {
  console.log(
    'editWishlistItem ACTION:  accountKey, wishlistKey, updatedObject',
    accountKey,
    wishlistKey,
    updatedObject,
  )
  fire
    .database()
    .ref(`${accountKey}/wishlist/`)
    .child(wishlistKey)
    .update(updatedObject)
    .catch((error) => {
      console.log('Edit Wishlist Item ERROR!@!!')
    })
}
