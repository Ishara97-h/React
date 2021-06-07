import { extendObservable} from 'mobx';
class UserStore {
    costructor(){
        extendObservable(this, {
            loading:true,
            isLoggedIn: false,
            username:''
        })
    }
}

export default new UserStore();