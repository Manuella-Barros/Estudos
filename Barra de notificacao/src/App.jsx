import './App.css';
import Notification from './componentes';

// Composition pattern
function App() {
  return (
    <main>
      <Notification.container>
        <Notification.icon/>
        <Notification.content texto={`Notificação 1`}/>
        <Notification.singleAction/>
      </Notification.container>

      <Notification.container>
        <Notification.content  texto={`Notificação 2`}/>
        <Notification.singleAction/>
      </Notification.container>

      <Notification.container>
        <Notification.content  texto={`Notificação 3`}/>
        <Notification.doubleAction/>
      </Notification.container>

      <Notification.container>
        <Notification.content texto={`Notificação 4`}/>
      </Notification.container>
    </main>
  )
}

export default App;