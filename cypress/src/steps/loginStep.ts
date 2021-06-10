import { Login } from "../components/login/login"
import { NewsModal } from "../components/newsModal/newsModal"

const login = new Login()
const newsModal = new NewsModal()

export const loginStep = () => {
  login.open()
  login.enterCredentials()
  newsModal.close()
  login.checkIfLoggedId()
}