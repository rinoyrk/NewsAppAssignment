import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Linking
} from 'react-native';

import {fetchApiData} from '../../data/fetchServerData';

import MainCarousel from '../elements/MainCarousel';
import CategoryCarousel from '../elements/CategoryCarousel';
import { TouchableOpacity } from 'react-native-gesture-handler';

class MainScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      response: {}
    }
  }

  componentDidMount(){


    fetchApiData('homecards.json').then(response => {
      this.setState({ loading: false, response: response.data });
    });


    
  }

  generateViewsForData = () => {
    let banners = false;
    let categories = false;
    const sections = this.state.response.data.sections;
    for(let i = 0; i < sections.length; i++){
      if(sections[i].layout == 'banner'){
        banners = (<MainCarousel banners = {sections[i].banners}/>);
      } else if (sections[i].layout == 'article_section'){
          categories = sections[i].articles.map(article => {
              return (
              <View key={article.category} >
                  <View style={styles.category}>
                    <Text style={styles.categoryText}>{article.title}</Text>
                    <TouchableOpacity onPress={ ()=>{ Linking.openURL(article.link)}}>
                    <Image style={styles.categoryNext} source={require('../../assets/images/next-1.png')}/>
                    </TouchableOpacity>
                  </View>
                  <CategoryCarousel posts = {article.posts}/>
              </View>
            );
        });
      }
    }
    return (<View>
      {banners}
      {categories}
      </View>);
}

  render () {
    
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        { !this.state.loading ?  this.generateViewsForData(): (<Text>Loading...</Text>) }
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  category: {
    flexDirection: 'row',
    flex: 1,
  },
  categoryText: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 20,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: -0.39,
    color: '#000000'
  },
  categoryNext: {
    marginRight: 20
  }
});

export default MainScreen;