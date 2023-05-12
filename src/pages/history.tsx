import { ScrollView } from 'react-native'

import Graph from '../components/graph'
import HistoryForGraph from '../components/historyList'

export default function History() {
  return (
    <ScrollView>
      <Graph />
      <HistoryForGraph />
    </ScrollView>
  )
}
