import React, { Component } from 'react';
import { InfoWindow, Marker, Map } from 'google-maps-react';


class MapView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {google: props.google, restaurants: props.restaurants, showingInfoWindow: false,
            activeMarker: {}, selectedPlace: {},};
    }

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onInfoWindowClose() {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
    }

    render() {
        return  <Map google={this.props.google}
                 style={{width: '62%', height: '80%', position: 'relative'}}
                 className={'map'}
                 zoom={12}
                 containerStyle={{}}
                 initialCenter={{lat: 40.7328, lng: -73.94}}>
                    <Marker name={'Imperial Palace'}
                            position={{lat: 40.761877, lng: -73.830639}}
                            onClick={this.onMarkerClick.bind(this)} />
                    <Marker name={'Roti Boti'}
                            position={{lat: 40.771925, lng: -73.926187}}
                            onClick={this.onMarkerClick.bind(this)}/>
                    <Marker name={'Punjabi'}
                            position={{lat: 40.722729, lng: -73.986597}}
                            onClick={this.onMarkerClick.bind(this)}/>
                    <Marker name={'Acapulco'}
                            position={{lat: 40.736707, lng: -73.955127}}
                            onClick={this.onMarkerClick.bind(this)}/>
                     <Marker name={"Peppa's Jerk Chicken"}
                            position={{lat: 40.654966, lng: -73.959895}}
                            onClick={this.onMarkerClick.bind(this)}/>
                    <Marker name={"Peaches Hot House"}
                            position={{lat: 40.683376, lng: -73.943730}}
                            onClick={this.onMarkerClick.bind(this)}/>
                    <Marker name={"Oramen"}
                            position={{lat: 40.738932, lng: -73.996055}}
                            onClick={this.onMarkerClick.bind(this)}/>
                    <Marker name={"Wasabi"}
                            position={{lat: 40.724131, lng: -73.950817}}
                            onClick={this.onMarkerClick.bind(this)}/>
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>

    }
}


export default MapView