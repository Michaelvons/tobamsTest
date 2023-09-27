import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import StatusBarComponent from '../components/StatusBarComponent';
import COLOURS from '../enums/colour';
import NavigationHeaderComponent from '../components/NavigationHeaderComponent';
import {NavigationProp} from '@react-navigation/native';
import ProductDetailStyle from '../styles/screens/ProductDetailStyle';
import Carousel from 'react-native-reanimated-carousel';
import {Image} from 'react-native';
import GapComponent from '../components/GapComponent';
import MEASUREMENT from '../const/measurement';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CarouselPaginationComponent from '../components/CarouselPaginationComponent';
import {ListItem} from '@rneui/themed';
import {useState} from 'react';
import QuantityPickerHorizontalComponent from '../components/QuanityPickerHorizontalComponent';
import ButtonCustomComponent from '../components/ButtonCustomComponent';
import SCREEN from '../enums/screen';

interface IProductDetail {
  navigation: NavigationProp<any>;
}

const ProductDetailScreen = ({navigation}: IProductDetail) => {
  const maxDescriptionLines = 4;

  const [ingredientExpanded, setIngredientExpanded] = useState(false);
  const [nutritionExpanded, setNutritionExpanded] = useState(false);
  const [preparationExpanded, setPreparationExpanded] = useState(false);
  const [dietaryExpanded, setDietaryExpanded] = useState(false);
  const [storageExpanded, setStorageExpanded] = useState(false);
  const [extraExpanded, setExtraExpanded] = useState(false);
  const [descriptionLimit, setDescriptionLimit] = useState(maxDescriptionLines);

  const goToProductScreen = () => {
    navigation.navigate(SCREEN.PRODUCT);
  };

  const showMoreLess = (numberOfLines: number) => {
    descriptionLimit === maxDescriptionLines
      ? setDescriptionLimit(numberOfLines)
      : setDescriptionLimit(maxDescriptionLines);
  };

  return (
    <>
      <StatusBarComponent hexColorCode={COLOURS.bg_app} />
      <View style={ProductDetailStyle.navigationSection}>
        <NavigationHeaderComponent
          showNavBack
          navBackAction={goToProductScreen}
        />
      </View>
      <ScrollView contentContainerStyle={ProductDetailStyle.canvas}>
        <Carousel
          width={MEASUREMENT.full_width()}
          height={304}
          data={[...new Array(6).keys()]}
          scrollAnimationDuration={1000}
          renderItem={({index}) => (
            <View style={ProductDetailStyle.imageContainer}>
              <Image
                source={require('../assets/images/afri-donut-mix.png')}
                style={ProductDetailStyle.image}
                resizeMode="contain"
              />
            </View>
          )}
        />
        <GapComponent height={24} width={0} />

        <CarouselPaginationComponent />

        <GapComponent height={24} width={0} />

        <View style={ProductDetailStyle.info}>
          <Text style={ProductDetailStyle.title}>
            African Donut Mix (Puff Puff)
          </Text>
          <Text style={ProductDetailStyle.price}>£3.99</Text>
        </View>
        <Text
          style={ProductDetailStyle.description}
          numberOfLines={descriptionLimit}
          ellipsizeMode="tail">
          Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are
          made from yeast dough, shaped into balls and deep-fried until golden
          brown. It has a doughnut-like texture but slightly o. It has a
          doughnut-like texture but slightly o. It has a doughnut-like texture
          but slightly o. It has a doughnut-like texture but slightly o
        </Text>
        <TouchableOpacity onPress={() => showMoreLess(10)}>
          <Text style={ProductDetailStyle.readMore}>Read More</Text>
        </TouchableOpacity>

        <GapComponent height={24} width={0} />

        <ListItem.Accordion
          containerStyle={ProductDetailStyle.accordionContainer}
          content={
            <>
              <ListItem.Content>
                <ListItem.Title style={ProductDetailStyle.accordionTitle}>
                  ingredient
                </ListItem.Title>
              </ListItem.Content>
            </>
          }
          icon={<Icon name="chevron-down" size={20} color={COLOURS.gray_1} />}
          isExpanded={ingredientExpanded}
          onPress={() => {
            setIngredientExpanded(!ingredientExpanded);
          }}>
          <ListItem containerStyle={ProductDetailStyle.accordionItemContainer}>
            <ListItem.Content style={ProductDetailStyle.accordionContent}>
              <Text style={ProductDetailStyle.description}>
                Insert ingredient Here
              </Text>
            </ListItem.Content>
          </ListItem>
        </ListItem.Accordion>

        <ListItem.Accordion
          containerStyle={ProductDetailStyle.accordionContainer}
          content={
            <>
              <ListItem.Content>
                <ListItem.Title style={ProductDetailStyle.accordionTitle}>
                  Nutritional Information
                </ListItem.Title>
              </ListItem.Content>
            </>
          }
          icon={<Icon name="chevron-down" size={20} color={COLOURS.gray_1} />}
          isExpanded={nutritionExpanded}
          onPress={() => {
            setNutritionExpanded(!nutritionExpanded);
          }}>
          <ListItem containerStyle={ProductDetailStyle.accordionItemContainer}>
            <ListItem.Content style={ProductDetailStyle.accordionContent}>
              <Text style={ProductDetailStyle.description}>
                Insert Nutritional Information Here
              </Text>
            </ListItem.Content>
          </ListItem>
        </ListItem.Accordion>

        <ListItem.Accordion
          containerStyle={ProductDetailStyle.accordionContainer}
          content={
            <>
              <ListItem.Content>
                <ListItem.Title style={ProductDetailStyle.accordionTitle}>
                  How to Prepare
                </ListItem.Title>
              </ListItem.Content>
            </>
          }
          icon={<Icon name="chevron-down" size={20} color={COLOURS.gray_1} />}
          isExpanded={preparationExpanded}
          onPress={() => {
            setPreparationExpanded(!preparationExpanded);
          }}>
          <ListItem containerStyle={ProductDetailStyle.accordionItemContainer}>
            <ListItem.Content style={ProductDetailStyle.accordionContent}>
              <Text style={ProductDetailStyle.description}>
                Insert How to Prepare Here
              </Text>
            </ListItem.Content>
          </ListItem>
        </ListItem.Accordion>

        <ListItem.Accordion
          containerStyle={ProductDetailStyle.accordionContainer}
          content={
            <>
              <ListItem.Content>
                <ListItem.Title style={ProductDetailStyle.accordionTitle}>
                  Dietary Information
                </ListItem.Title>
              </ListItem.Content>
            </>
          }
          icon={<Icon name="chevron-down" size={20} color={COLOURS.gray_1} />}
          isExpanded={dietaryExpanded}
          onPress={() => {
            setDietaryExpanded(!dietaryExpanded);
          }}>
          <ListItem containerStyle={ProductDetailStyle.accordionItemContainer}>
            <ListItem.Content style={ProductDetailStyle.accordionContent}>
              <Text style={ProductDetailStyle.description}>
                Insert Dietary Information Here
              </Text>
            </ListItem.Content>
          </ListItem>
        </ListItem.Accordion>

        <ListItem.Accordion
          containerStyle={ProductDetailStyle.accordionContainer}
          content={
            <>
              <ListItem.Content>
                <ListItem.Title style={ProductDetailStyle.accordionTitle}>
                  Storage Information
                </ListItem.Title>
              </ListItem.Content>
            </>
          }
          icon={<Icon name="chevron-down" size={20} color={COLOURS.gray_1} />}
          isExpanded={storageExpanded}
          onPress={() => {
            setStorageExpanded(!storageExpanded);
          }}>
          <ListItem containerStyle={ProductDetailStyle.accordionItemContainer}>
            <ListItem.Content style={ProductDetailStyle.accordionContent}>
              <Text style={ProductDetailStyle.description}>
                Insert Storage Information Here
              </Text>
            </ListItem.Content>
          </ListItem>
        </ListItem.Accordion>

        <ListItem.Accordion
          containerStyle={ProductDetailStyle.accordionContainer}
          content={
            <>
              <ListItem.Content>
                <ListItem.Title style={ProductDetailStyle.accordionTitle}>
                  Extra
                </ListItem.Title>
              </ListItem.Content>
            </>
          }
          icon={<Icon name="chevron-down" size={20} color={COLOURS.gray_1} />}
          isExpanded={extraExpanded}
          onPress={() => {
            setExtraExpanded(!extraExpanded);
          }}>
          <ListItem containerStyle={ProductDetailStyle.accordionItemContainer}>
            <ListItem.Content style={ProductDetailStyle.accordionContent}>
              <Text style={ProductDetailStyle.description}>
                Insert Extra Here
              </Text>
            </ListItem.Content>
          </ListItem>
        </ListItem.Accordion>

        <GapComponent height={24} width={0} />

        <QuantityPickerHorizontalComponent />

        <GapComponent height={24} width={0} />

        <ButtonCustomComponent title="Add to cart" />
        <GapComponent height={12} width={0} />
        <ButtonCustomComponent title="Subscribe to a Plan" isHollow />
      </ScrollView>
    </>
  );
};

export default ProductDetailScreen;
