import pandas as pd
import numpy as np
import sqlalchemy
from pmdarima import auto_arima
# from statsmodels.tsa.arima.model import ARIMA


class arima_model():

    # connexion a la bdd

    user = 'saber'
    pwd = '7x%j%8%VpejLCN'
    db_name = "spp"
    url = "mysql+pymysql://{user}:{pwd}@127.0.0.1:3306/{db_name}".format(
        user=user, pwd=pwd, db_name=db_name)
    con = sqlalchemy.create_engine(url)

    # historique des prix

    def priceHistory(ticker):
        ticker = ticker.lower()
        df = pd.read_sql(ticker, arima_model.con, index_col='date')
        return df

    # avoir la prediction

    def prediction(ticker, start=None, end=None):

        # recup le dataframe

        def readDfSql(ticker):
            ticker = ticker.lower()
            df = pd.read_sql(ticker, arima_model.con, index_col='date')
            return df

        df = readDfSql(ticker)

        # trouver les paramètres p,d,q

        model = auto_arima(df)
        # params = model.get_params()['order']
        # seasonal_params = model.get_params()['seasonal_order']
        # trend = model.get_params()['trend']
        # model = SARIMAX(df,order=params,seasonal_order=seasonal_params,trend=trend)
        pred = model.fit_predict(df)

        return pred
