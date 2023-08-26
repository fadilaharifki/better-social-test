import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';

import styles from './styles';
import {dummy} from './dummy';
import WorldIcon from '../../../assets/svg/world';
import TimeIcon from '../../../assets/svg/time';
import DotIcon from '../../../assets/svg/dot';
import ShareIcon from '../../../assets/svg/share';
import CommentIcon from '../../../assets/svg/comment';
import BlockIcon from '../../../assets/svg/block';
import ArrowBottomIcon from '../../../assets/svg/arrow-bottom';
import ArrowTopIcon from '../../../assets/svg/arrow-top';
import PencilIcon from '../../../assets/svg/pencil';

const FeedScreen = () => {
  return (
    <View>
      <ScrollView
        style={styles.containerScroll}
        showsVerticalScrollIndicator={false}>
        {dummy?.map((item, index) => {
          return (
            <View key={index}>
              <View style={styles.containerCard}>
                <View style={styles.containerCardTop}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.sectionTop}>
                      <View>
                        <Image
                          style={styles.containerImage}
                          source={{
                            uri: item?.user?.image,
                          }}></Image>
                      </View>
                      <View style={styles.containerTextTop}>
                        <Text
                          style={{
                            fontWeight: 700,
                            color: 'black',
                          }}>
                          {item?.user?.name}
                        </Text>
                        <View style={styles.containerCardTopDate}>
                          <View>
                            <Text>
                              {moment(item?.user?.postDate).format(
                                'MMM DD, YYYY',
                              )}
                            </Text>
                          </View>
                          {item?.user?.location ? (
                            <View style={styles.location}>
                              <View style={styles.containerDot}>
                                <DotIcon />
                              </View>
                              <WorldIcon />
                              <View style={styles.containerDot}>
                                <DotIcon />
                              </View>
                              <TimeIcon />
                              <View style={styles.containerDot}>
                                <DotIcon />
                              </View>
                              <Text>{item?.user?.location}</Text>
                            </View>
                          ) : null}
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.containerCardContent}>
                    <View style={styles.containerDesc}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: 'black',
                        }}
                        numberOfLines={3}
                        ellipsizeMode="tail">
                        {item?.article?.desc}
                      </Text>
                      {item?.article?.desc.length > 160 ? (
                        <TouchableOpacity>
                          <Text style={{color: 'blue'}}>More</Text>
                        </TouchableOpacity>
                      ) : null}
                    </View>
                    <View style={styles.containerImageContent}>
                      <Image
                        style={styles.imageContent}
                        source={{
                          uri: item?.article?.imageArticle,
                        }}></Image>
                    </View>
                  </View>
                </View>
                <View style={styles.containerCardBottom}>
                  <View style={styles.containerCardBottomLeft}>
                    <View style={styles.iconCardBottom}>
                      <ShareIcon />
                    </View>
                    <View style={styles.iconCardBottom}>
                      <CommentIcon />
                      <Text style={{marginHorizontal: 10, color: '#C4C4C4'}}>
                        33
                      </Text>
                    </View>
                  </View>
                  <View style={styles.containerCardBottomRight}>
                    <View style={styles.iconCardBottom}>
                      <BlockIcon />
                    </View>
                    <View style={styles.iconCardBottom}>
                      <ArrowBottomIcon />
                      <Text
                        style={{
                          marginLeft: 15,
                          marginRight: -15,
                          color: 'blue',
                        }}>
                        376
                      </Text>
                    </View>
                    <View style={styles.iconCardBottom}>
                      <ArrowTopIcon />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.line}></View>
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity style={styles.buttonPost}>
        <PencilIcon />
      </TouchableOpacity>
    </View>
  );
};

export default FeedScreen;
