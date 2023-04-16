export default function book (state = ['三国演义', '水浒传'], action) {
    console.log('action',action)
    switch (action.type) {
      case 'book/add':
        return [state, action.payload]
      default:
        return state
    }
  }