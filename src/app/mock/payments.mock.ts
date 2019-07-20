import { PaymentInterface } from '../interfaces/payment.interface';

export const paymentMock: PaymentInterface[] = [
    {
      empleado_ced: '8-888-888',
      cheque: 1,
      monto: 1500.89,
      concepto_pago: 'Planilla 080',
      fecha_pago: '06-06-2019'
    },
    {
        empleado_ced: '9-574-1614',
        cheque: 2,
        monto: 5000.70,
        concepto_pago: 'Planilla 080',
        fecha_pago: '09-06-2011'
      },
      {
        empleado_ced: '9-574-1614',
        cheque: 3,
        monto: 400.77,
        concepto_pago: 'Vacaciones',
        fecha_pago: '02-03-2018'
      },
      {
        empleado_ced: '2-33-222',
        cheque: 4,
        monto: 6700.85,
        concepto_pago: 'Pago Adelantado',
        fecha_pago: '02-03-2020'
      },
]