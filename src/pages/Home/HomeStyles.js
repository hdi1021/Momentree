import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: { flex: 1 },
  header: {
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20,
    position: 'relative',
  },
  coin: {
    width: wp('15%'),
    height: hp('3%'),
    backgroundColor: '#C8F4ED',
    borderRadius: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  star: {
    width: '55%',
    height: '90%',
    resizeMode: 'contain',
  },
   coinCount: {
    position: 'absolute',
    left: 38,
    top: 2,
    fontWeight: '700',
    fontSize: 20,
    color: '#454545',
  },
  search: {
    width: wp('5%'),
    height: hp('3.5%'),
    resizeMode: 'contain',
    position: 'absolute',
    alignItems: 'center',
    right: 70,
    top: 50,
  },
  alarm: {
    width: wp('5%'),
    height: hp('3.5%'),
    resizeMode: 'contain',
    position: 'absolute',
    right: 20,
    top: 50,
  },
  body: {
    flex: 6.5,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
  },
  calendar: {
    width: wp('90%'),
    backgroundColor: '#FAFAFA',
  },
  journalButton: {
    padding: 10,
    backgroundColor: 0,
    margin: 20,
    borderRadius: 8,
    width: wp('80%'),
    alignSelf: 'center',
    borderColor: '#ddd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  journalButtonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dayContainer: {
    backgroundColor: 'white',
    width: wp('12%'),
    height: hp('7.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayInner: {
    width: 20,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    fontSize: 10,
  },
  enableDate: {},
  disableDate: { opacity: 0.4 },
});

export default styles;