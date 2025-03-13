import * as Notifications from 'expo-notifications';

export const scheduleTaxReminder = async (tax) => {
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `⚠️ ${tax.name} Vencendo!`,
        body: `Valor: R$ ${tax.amount} - Vence em ${tax.dueDate}`,
      },
      trigger: {
        hour: 9,
        minute: 0,
        repeats: true
      },
    });
  } catch (error) {
    console.error('Erro ao agendar notificação:', error);
  }
};

export const registerForPushNotifications = async () => {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== 'granted') {
    await Notifications.requestPermissionsAsync();
  }
};