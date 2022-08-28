import {YMaps, Map, Placemark} from "react-yandex-maps";
import {connect} from "react-redux";
import './yandexMap.scss'

const YandexMap = ({...props}) => {

  const {userLocation} = props;

  return (
    <div className="boxListItem boxListItemMap">
      <YMaps>
        <Map
          state={{
            center: [userLocation.lat, userLocation.lon],
            zoom: 9
          }}
        >
          <Placemark geometry={[userLocation.lat, userLocation.lon]}/>
        </Map>
      </YMaps>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userLocation: state.user.location
  }
}

const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(YandexMap);