import { AxiosInstance, AxiosResponse } from "axios";
import {
  CursorOptions,
  Feedback,
  FeedbackCursor,
  FeedbackFilter,
  FeedbackOptions,
  FeedbackTypeFilter,
  Success,
} from "../interfaces";

export function getFeedback<T extends string>(
  axios: AxiosInstance,
  { type, userId, itemId, cursorOptions }: FeedbackOptions<T>,
) {
  return axios
    .get<Feedback<T>, AxiosResponse<Feedback<T>>>(
      `/feedback/${type}/${userId}/${itemId}`,
      {
        params: cursorOptions,
      },
    )
    .then(({ data }) => {
      return data;
    });
}

export function deleteFeedback<T extends string>(
  axios: AxiosInstance,
  { type, userId, itemId }: FeedbackFilter<T>,
) {
  return axios
    .delete<Feedback<T>, AxiosResponse<Feedback<T>>>(
      `/feedback/${type}/${userId}/${itemId}`,
    )
    .then(({ data }) => {
      return data;
    });
}

export function getFeedbacksByType<T extends string>(
  axios: AxiosInstance,
  { type, cursorOptions }: FeedbackTypeFilter<T>,
) {
  return axios
    .get<FeedbackCursor<T>, AxiosResponse<FeedbackCursor<T>>>(
      `/feedback/${type}`,
      {
        params: cursorOptions,
      },
    )
    .then(({ data }) => {
      return data;
    });
}

export function getFeedbacks<T extends string>(
  axios: AxiosInstance,
  options?: CursorOptions,
) {
  return axios
    .get<FeedbackCursor<T>, AxiosResponse<FeedbackCursor<T>>>(`/feedback`, {
      params: options,
    })
    .then(({ data }) => {
      return data;
    });
}

export function insertFeedbacks<T extends string>(
  axios: AxiosInstance,
  feedbacksList: Feedback<T>[],
) {
  return axios
    .post<Success, AxiosResponse<Success>>(`/feedback`, feedbacksList)
    .then(({ data }) => {
      return data.RowAffected;
    });
}

export function upsertFeedbacks<T extends string>(
  axios: AxiosInstance,
  feedbacksList: Feedback<T>[],
) {
  return axios
    .put<Success, AxiosResponse<Success>>(`/feedback`, feedbacksList)
    .then(({ data }) => {
      return data.RowAffected;
    });
}

export function itemFeedbacks<T extends string>(
  axios: AxiosInstance,
  itemId: T,
) {
  return axios
    .get<Success, AxiosResponse<Feedback<T>[]>>(`/item/${itemId}/feedback`)
    .then(({ data }) => data);
}

export function itemFeedbackByType<T extends string>(
  axios: AxiosInstance,
  { itemId, feedbackType }: { itemId: T; feedbackType: T },
) {
  return axios
    .get<Success, AxiosResponse<Feedback<T>[]>>(
      `/item/${itemId}/feedback/${feedbackType}`,
    )
    .then(({ data }) => data);
}

export function userFeedbacks<T extends string>(
  axios: AxiosInstance,
  userId: T,
) {
  return axios
    .get<Success, AxiosResponse<Feedback<T>[]>>(`/user/${userId}/feedback`)
    .then(({ data }) => data);
}

export function userFeedbackByType<T extends string>(
  axios: AxiosInstance,
  { userId, feedbackType }: { userId: T; feedbackType: T },
) {
  return axios
    .get<Success, AxiosResponse<Feedback<T>[]>>(
      `/user/${userId}/feedback/${feedbackType}`,
    )
    .then(({ data }) => data);
}
