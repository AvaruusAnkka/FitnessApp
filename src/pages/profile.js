import React, { useState, useContext } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Switch,
} from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { PolarContext } from '../context/polarContext'

export default function Profile() {
  const { userData } = useContext(PolarContext)
  console.log('Settings: ', userData['first-name'])

  const [form, setForm] = useState({
    genders: 'GENDER',
    heights: 'HEIGHT (CM)',
    weights: 'WEIGHT (KG)',
    birthday: 'BIRTHDAY',
  })

  const SECTIONS = [
    {
      header: 'Stats',
      items: [
        {
          id: 'genders',
          icon: 'users',
          label: userData['gender'],
          type: 'select',
        },
        {
          id: 'heights',
          icon: 'crop',
          label: userData['height'],
          type: 'select',
        },
        {
          id: 'weights',
          icon: 'slack',
          label: userData['weight'],
          type: 'select',
        },
        {
          id: 'birthday',
          icon: 'gift',
          label: userData['birthday'],
          type: 'select',
        },
      ],
    },
    {
      header: 'User ID',
      items: [{ id: 'lll', icon: 'globe', label: userData['polar-user-id'] }],
    },
  ]

  return (
    <SafeAreaView style={{ backgroundColor: '#f6f6f6' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>

          <Text style={styles.subtitle}>Here you can view your profile!</Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.profileName}>
            {' '}
            {userData['first-name']} {userData['last-name']}
          </Text>

          <Text style={styles.profileEmail}>Your Email</Text>

          <TouchableOpacity onPress={() => {}}>
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Change Email</Text>

              <FeatherIcon color='#fff' name='edit' size={16} />
            </View>
          </TouchableOpacity>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{header}</Text>
            </View>
            <View style={styles.sectionBody}>
              {items.map(({ id, label, icon, type, value }, index) => {
                return (
                  <View
                    key={id}
                    style={[
                      styles.rowWrapper,
                      index === 0 && { borderTopWidth: 0 },
                    ]}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        // handle onPress
                      }}
                    >
                      <View style={styles.row}>
                        <FeatherIcon
                          color='#616161'
                          name={icon}
                          style={styles.rowIcon}
                          size={22}
                        />

                        <Text style={styles.rowLabel}>{label}</Text>

                        <View style={styles.rowSpacer} />

                        {type === 'select' && (
                          <Text style={styles.rowValue}>{form[id]}</Text>
                        )}

                        {type === 'toggle' && (
                          <Switch
                            onChange={(val) => setForm({ ...form, [id]: val })}
                            value={form[id]}
                          />
                        )}

                        {(type === 'select' || type === 'link') && (
                          <FeatherIcon
                            color='#ababab'
                            name='chevron-right'
                            size={22}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                )
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  section: {
    paddingTop: 12,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  sectionBody: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  profile: {
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#090909',
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '400',
    color: '#848484',
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 24,
    height: 50,
  },
  rowWrapper: {
    paddingLeft: 24,
    backgroundColor: '#fff',
    borderTopWidth: 2,
    borderColor: '#e3e3e3',
  },
  rowIcon: {
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  rowValue: {
    fontSize: 17,
    color: '#616161',
    marginRight: 4,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
  },
  text: {
    marginTop: 20,
  },
})
