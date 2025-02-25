import React, { createContext, useContext, useState, useEffect } from 'react';

interface Goal {
  id: number;
  title: string;
  description: string;
  progress: number;
  deadline: string;
  category: string;
}

interface Habit {
  id: number;
  title: string;
  streak: number;
  completed: boolean;
  history: boolean[];
}

interface PersonalGrowthContextType {
  goals: Goal[];
  habits: Habit[];
  addGoal: (goal: Omit<Goal, 'id'>) => void;
  updateGoal: (goal: Goal) => void;
  deleteGoal: (id: number) => void;
  updateHabit: (habit: Habit) => void;
  toggleHabitCompletion: (id: number) => void;
}

const PersonalGrowthContext = createContext<PersonalGrowthContextType | undefined>(undefined);

export const PersonalGrowthProvider = ({ children }) => {
  const [goals, setGoals] = useState<Goal[]>(() => {
    const saved = localStorage.getItem('goals');
    return saved ? JSON.parse(saved) : [];
  });

  const [habits, setHabits] = useState<Habit[]>(() => {
    const saved = localStorage.getItem('habits');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const addGoal = (newGoal: Omit<Goal, 'id'>) => {
    const goal = { ...newGoal, id: Date.now() };
    setGoals([...goals, goal]);
  };

  const updateGoal = (updatedGoal: Goal) => {
    setGoals(goals.map(goal => 
      goal.id === updatedGoal.id ? updatedGoal : goal
    ));
  };

  const deleteGoal = (id: number) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const updateHabit = (updatedHabit: Habit) => {
    setHabits(habits.map(habit =>
      habit.id === updatedHabit.id ? updatedHabit : habit
    ));
  };

  const toggleHabitCompletion = (id: number) => {
    setHabits(habits.map(habit =>
      habit.id === id
        ? { ...habit, completed: !habit.completed, streak: !habit.completed ? habit.streak + 1 : habit.streak - 1 }
        : habit
    ));
  };

  return (
    <PersonalGrowthContext.Provider value={{
      goals,
      habits,
      addGoal,
      updateGoal,
      deleteGoal,
      updateHabit,
      toggleHabitCompletion,
    }}>
      {children}
    </PersonalGrowthContext.Provider>
  );
};

export const usePersonalGrowth = () => {
  const context = useContext(PersonalGrowthContext);
  if (context === undefined) {
    throw new Error('usePersonalGrowth must be used within a PersonalGrowthProvider');
  }
  return context;
}; 