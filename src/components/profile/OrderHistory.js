import React, { useState, useContext, useEffect } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import HistoryCard from "./HistoryCard";
import AppText from "../../utils/components/AppText";
import { getUser, getOrders, getMeals } from "../../utils/apis/api";
import { LogInScreenContext } from "../../contexts/LogInScreenContext.jsx";
import { format, parseISO } from "date-fns";

const OrderHistory = ({ history, setHistory }) => {
  const { userInitData, setUserInitData } = useContext(LogInScreenContext);
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const orderData = await getOrders(userInitData.user._id);
        const meals = await getMeals();

        const ordersMealDetail = orderData.map((order) => {
          const mealDetails = meals.filter((meal) => order.meals.includes(meal._id));
          const mealsWithDetails = mealDetails.map((meal) => {
            return {
              id: meal._id,
              name: meal.name,
              photo: meal.photo,
            };
          });
          return {
            ...order,
            meals: mealsWithDetails,
          };
        });
        setOrders(ordersMealDetail);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Text>Orders are loading...</Text>
      ) : (
        <ScrollView bounces={false}>
          <View className="flex-1 justify-center items-center">
            {orders.map((order, index) => {
              const formattedDate = format(
                parseISO(order.deliveryDate),
                "MM/dd/yyyy"
              );
              return (
                <>
                  <AppText className="text-xl" key={index}>
                    {formattedDate}
                  </AppText>
                  {order.meals.map((meal,index) => (
                    <HistoryCard key={index} meal={meal} userId={userInitData.user._id} firstName={userInitData.user.firstName}/>
                  ))}
                </>
              );
            })}
            <Pressable
              className="px-4 py-2 bg-pakistangreen rounded-md"
              onPress={() => setHistory(!history)}
            >
              <AppText className="text-lemonchiffon"> Close History </AppText>
            </Pressable>
          </View>
        </ScrollView>
      )}
    </>
  );
};
export default OrderHistory;
